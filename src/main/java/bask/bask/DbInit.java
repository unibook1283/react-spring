package bask.bask;

import bask.bask.domain.Court;
import bask.bask.dto.KakaoCourtDto;
import bask.bask.dto.JsonResponse;
import bask.bask.service.CourtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class DbInit {

    private final CourtService courtService;
    @Value("${kakao-api-key}")
    private String kakao_apikey;

//    @PostConstruct
    private void postConstruct() {
        double d=0.025;
        for (double y=37.4574; y<37.6847; y+=d) {
            for (double x=126.836; x<127.2066; x+=d) {
                WebClient.RequestHeadersSpec<?> authorization = WebClient.builder()
                        .build()
                        .get()
                        .uri("https://dapi.kakao.com/v2/local/search/keyword.json?query=농구장&y="+y+"&x="+x)
                        .header("Authorization", "KakaoAK " + kakao_apikey);   // 인증키 숨겨
                System.out.println("https://dapi.kakao.com/v2/local/search/keyword.json?query=농구장&y="+y+"&x="+x);

                Mono<JsonResponse> objectMono = authorization.accept(MediaType.APPLICATION_JSON)
                        .retrieve()
                        .bodyToMono(JsonResponse.class);

                JsonResponse block = objectMono.block();    // 다 읽으면 여기서 예외가 터지는데
                KakaoCourtDto[] courts = block.getDocuments();
                Arrays.stream(courts).forEach(c -> {
                    Court court = c.toCourt();
                    if (!courtService.isDuplicate(court)) {
                        courtService.saveCourt(court);
                    }
                });
            }
        }
    }
}

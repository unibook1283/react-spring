package bask.bask.controller;

import bask.bask.domain.Court;
import bask.bask.dto.CourtDto;
import bask.bask.service.CourtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CourtController {

    //    @PostMapping("/api/court/new")
//    public String createCourt(@RequestBody Map<String, String> map) {
//        map.forEach((key, value) -> {
//            System.out.println(String.format("key : %s, value : %s, type : %s", key, value, value.getClass().getName()));
//        });
//        return "This is response";
//    }
    @Autowired
    CourtService courtService;

    @PostMapping("/api/court/new")
    public void createCourt(@RequestBody Court court) {
        Long id = courtService.saveCourt(court);
    }

    // 이렇게 같이 하는거 괜찮나?
    @GetMapping("/api/court")
    public List<CourtDto> getCourts(@RequestParam(value = "dong", required = false) String dong) {
        if (dong != null) {
            return courtService.findCourtsByDong(dong)
                    .stream()
                    .map(court -> court.toCourtDto())
                    .collect(Collectors.toList());
        }

        return courtService.findCourts()
                .stream()
                .map(court -> court.toCourtDto())
                .collect(Collectors.toList());
    }

    @GetMapping("/api/court/{courtId}")
    public CourtDto findCourtById(@PathVariable Long courtId) {
        return courtService.findOne(courtId).toCourtDto();
    }

    @PatchMapping("/api/court/{courtId}")
    public void updateCourt(@PathVariable Long courtId, @RequestBody Court court) {
        Court newCourt = new Court();
        newCourt.setId(courtId);
        newCourt.setPlaceName(court.getPlaceName());
        newCourt.setAddressName(court.getAddressName());
        newCourt.setRoadAddressName(court.getRoadAddressName());
        newCourt.setFloor(court.getFloor());
        newCourt.setHeight(court.getHeight());
        newCourt.setGoalPosts(court.getGoalPosts());
        courtService.saveCourt(newCourt);
    }
    // PathVariable Long courtId 받아서 court를 다시 찾는게 낫나?
    // request body로 받는게 낫겠지?

    @PostMapping("/api/court/delete")
    public Court deleteCourt(@RequestBody Court court) {
        courtService.removeCourt(court);
        return court;
    }

}

package bask.bask.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_GATEWAY, reason = "잘못된 요청 오류")
public class BadRequestException extends RuntimeException {

}

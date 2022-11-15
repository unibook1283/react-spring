package bask.bask.exception.exhandler;

import bask.bask.exception.LoginException;
import bask.bask.exception.UnauthorizedException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ExControllerAdvice {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResult unauthorizedExHandler(UnauthorizedException e) {
        log.error("[exceptionHandler] ex", e);
        return new ErrorResult("UNAUTH-EX", e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResult loginExHandler(LoginException e) {
        log.error("[exceptionHandler] ex", e);
        return new ErrorResult("LOGIN-EX", e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResult methodArgumentNotValidExHandler(MethodArgumentNotValidException e) {
        log.error("[exceptionHandler] ex", e);

        ObjectError objectError = e.getBindingResult().getAllErrors().get(0);
        String fieldName = ((FieldError) objectError).getField();
        String message = objectError.getDefaultMessage();

        return new ErrorResult(fieldName, message);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    public ErrorResult exHandler(Exception e) {
        log.error("[exceptionHandler] ex", e);
        return new ErrorResult("EX", "내부 오류");
    }
}

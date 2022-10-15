package bask.bask.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Data
public class LoginForm {

    @Email(message = "이메일 형식이 아닙니다.")
    @NotEmpty(message = "이메일을 입력해주세요.")
    private String email;
    @NotEmpty(message = "비밀번호를 입력해주세요.")
    private String password;
}

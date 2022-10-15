package bask.bask.dto;

import bask.bask.domain.Member;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Getter @Setter
public class MemberForm {

    @NotEmpty(message = "회원 이름은 필수입니다")
    private String name;
    @NotEmpty(message = "email은 필수입니다")
    @Email(message = "email 형식이 맞지 않습니다")
    private String email;
    @NotEmpty(message = "전화번호는 필수입니다.")
    private String phoneNumber;
    @NotEmpty(message = "비밀번호는 필수입니다.")
    private String password;

    public Member toMember() {
        return new Member(this.getName(), this.getEmail(), this.getPhoneNumber(), this.getPassword());
    }
}

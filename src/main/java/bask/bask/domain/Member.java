package bask.bask.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    public Member() {

    }
    public Member(String name, String email, String phoneNumber, String password) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    @Id @GeneratedValue
    @Column(name = "MEMBER_ID")
    private Long id;

    @OneToMany(mappedBy = "member")
    private List<Favorite> favorites = new ArrayList<Favorite>();

    private String name;
    private String email;
    private String phoneNumber;
    private String password;
    private int role;   // enum으로 할까 고민중. client에서 문제가 없을지..
    // token?
}

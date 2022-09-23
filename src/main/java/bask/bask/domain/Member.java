package bask.bask.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

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

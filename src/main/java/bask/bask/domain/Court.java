package bask.bask.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Court {

    @Id @GeneratedValue
    private Long id;

    @OneToMany(mappedBy = "court")
    private List<Favorite> favorites = new ArrayList<Favorite>();

    private String name;

    @Column(name = "ADDRESS_NAME")
    private String addressName;

    @Column(name = "ROAD_ADDRESS_NAME")
    private String roadAddressName;

    private int goalPosts;
    private String floor;
    private String height;
    private int x;
    private int y;
    private Boolean valid;  // 관리자가 승인하기 전에는 valid가 false임.
}

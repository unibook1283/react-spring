package bask.bask.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {

    @Id
    private Long postId;
    private Long courtId;
    private String title;
    private String content;
}

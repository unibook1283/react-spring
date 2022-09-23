package bask.bask.service;

import bask.bask.domain.Court;
import bask.bask.repository.CourtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CourtService {

    @Autowired
    CourtRepository courtRepository;

    public Long saveCourt(Court court) {
        courtRepository.save(court);
        return court.getId();
    }

    public List<Court> findCourts() {
        return courtRepository.findAll();
    }

    public Court findOne(Long courtId) {
        return courtRepository.findOne(courtId);
    }

}

package bask.bask.service;

import bask.bask.domain.Court;
import bask.bask.repository.CourtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class CourtService {

    @Autowired
    CourtRepository courtRepository;

    @Transactional
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

    @Transactional
    public Long removeCourt(Court court) {
        courtRepository.delete(court);
        return court.getId();
    }

    public Boolean isDuplicate(Court court) {
        return !courtRepository.findByAddressName(court.getAddressName()).isEmpty();
    }

    public List<Court> findCourtsByAddressName(String addressName) {
        return courtRepository.findByAddressName(addressName);
    }

    public List<Court> findCourtsByDong(String dong) {
        return courtRepository.findByDong(dong);
    }
}

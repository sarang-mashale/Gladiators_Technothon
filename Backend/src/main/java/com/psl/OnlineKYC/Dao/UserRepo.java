package com.psl.OnlineKYC.Dao;

import com.psl.OnlineKYC.Entities.UserDetailsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserDetailsEntity,String> {
}

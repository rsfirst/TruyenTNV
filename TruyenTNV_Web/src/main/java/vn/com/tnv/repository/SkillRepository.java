package vn.com.tnv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vn.com.tnv.entity.Skill;

/**
 * Created by ashish on 13/5/17.
 */
@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer>{
}

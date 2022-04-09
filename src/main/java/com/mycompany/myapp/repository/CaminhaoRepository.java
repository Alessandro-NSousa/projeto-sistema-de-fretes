package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Caminhao;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Caminhao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CaminhaoRepository extends JpaRepository<Caminhao, Long> {}

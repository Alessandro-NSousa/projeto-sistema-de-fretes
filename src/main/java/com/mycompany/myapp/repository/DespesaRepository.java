package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Despesa;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Despesa entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DespesaRepository extends JpaRepository<Despesa, Long> {}

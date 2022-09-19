package com.generation.masc.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.masc.models.UsuarioModel;

@Repository

public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long> {
	public abstract ArrayList<UsuarioModel>fi

}

package com.generation.masc.services;

import org.springframework.stereotype.Service;

import com.generation.masc.models.UsuarioModel;
import com.generation.masc.repositories.UsuarioRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

@Service


public class UsuarioService {
	@Autowired
	UsuarioRepository usuarioRepository;
	
	public ArrayList<UsuarioModel> obtenerusuarios() {
		return (ArrayList<UsuarioModel>)usuarioRepository.findAll();
		
	}	
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }


}

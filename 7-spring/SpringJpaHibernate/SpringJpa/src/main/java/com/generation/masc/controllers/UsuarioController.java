package com.generation.masc.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.masc.models.UsuarioModel;
import com.generation.masc.services.UsuarioService;

@RestController
@RequestMapping("/usuario")

public class UsuarioController {
	@Autowired
	UsuarioService usuarioService;
	@GetMapping()
	public ArrayList<UsuarioModel> obtenerUsuarios(){
        return usuarioService.obtenerusuarios();
    }
	
	@PostMapping()
	public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioService.guardarUsuario(usuario);
    }

	
	


}

package vn.com.tnv.service.impl;

import vn.com.tnv.converter.UserConverter;
import vn.com.tnv.dto.UserDto;
import vn.com.tnv.repository.UserRepository;
import vn.com.tnv.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ashish on 13/5/17.
 */
@Service
public class UserServiceimpl implements UserService {

	UserRepository userRepository;

	@Override
	public UserDto getUserById(Integer userId) {
		return UserConverter.entityToDto(userRepository.getOne(userId));
	}

	@Override
	public void saveUser(UserDto userDto) {
		userRepository.save(UserConverter.dtoToEntity(userDto));
	}

	@Override
	public List<UserDto> getAllUsers() {
		return userRepository.findAll().stream().map(UserConverter::entityToDto).collect(Collectors.toList());
	}
}

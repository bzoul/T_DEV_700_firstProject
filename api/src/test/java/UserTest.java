import java.util.ArrayList;
import java.util.List;

import com.epitech.controllers.UserController;
import com.epitech.models.User;
import com.epitech.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.stubbing.Answer;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.Silent.class)
public class UserTest {

	@Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserController userService;
    
    @Before
    public void init() {
        User user = new User();
        user.setUsername("user.test");
        user.setEmail("user.test@gmail.com");

        User admin = new User();
        admin.setUsername("admin.test");
        admin.setEmail("admin.test@gmail.com");

        when(userRepository.findAll()).thenReturn(new ArrayList<>(List.of(user, admin)));

        when(userRepository.findByUsername("user.test")).thenReturn(user);
        when(userRepository.findByUsername("admin.test")).thenReturn(admin);

        when(userRepository.save(any(User.class))).thenAnswer((Answer<User>) invocationOnMock -> {
            Object[] args = invocationOnMock.getArguments();
            return (User) args[0];
        });
    }
    
    @Test
    public void getAllUsersTest(){
    	
        ArrayList<User> allUsers = (ArrayList<User>) userService.getAllUsers();

        assertEquals("Il doit y avoir 2 users", 2, allUsers.size());
        assertEquals("Le premier user est user", "user.test", allUsers.get(0).getUsername());
        assertEquals("Le deuxieme user est admin", "admin.test", allUsers.get(1).getUsername());
    }
    
    @Test
    public void createUserTest(){
    	
        User romain = new User();
        
        romain.setUsername("romain.emery");
        romain.setEmail("romain.emery@epitech.eu");
        romain.setPassword("password");

        User newUser = userService.createUser(romain);

        assertNotNull("Doit retourner le nouveau user", newUser);
        assertEquals("Le nouvel user est romain emery", "romain.emery", newUser.getUsername());
    }
}

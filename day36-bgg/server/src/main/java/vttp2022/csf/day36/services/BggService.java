package vttp2022.csf.day36.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp2022.csf.day36.models.Comment;
import vttp2022.csf.day36.models.Game;
import vttp2022.csf.day36.repository.CommentRepo;
import vttp2022.csf.day36.repository.GameRepo;

@Service
public class BggService {

    @Autowired
    private GameRepo gameRepo;

    @Autowired
    private CommentRepo commentRepo;


    public List<Comment> getComments(int gameId){
        return commentRepo.findCommentById(gameId);
    }
    

    public List<Game> getGames(){
        return this.getGames(20, 0);
    }

    public List<Game> getGames(int limit, int skip) {
        return gameRepo.getGames(limit, skip);
    }
}

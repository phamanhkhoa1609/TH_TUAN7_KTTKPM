import java.sql.*;
import redis.clients.jedis.Jedis;

public class Worker {
    public static void main(String[] args) throws Exception {
        Jedis redis = new Jedis("redis");
        Connection db = DriverManager.getConnection("jdbc:postgresql://db:5432/votes", "postgres", "postgres");

        while (true) {
            String vote = redis.lpop("votes");
            if (vote != null) {
                PreparedStatement stmt = db.prepareStatement("INSERT INTO votes (vote_option) VALUES (?)");
                stmt.setString(1, vote);
                stmt.executeUpdate();
                stmt.close();
            }
            Thread.sleep(1000);
        }
    }
}

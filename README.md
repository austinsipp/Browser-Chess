# Browser-Chess

Sources:
Chess Piece Icons taken from https://commons.wikimedia.org/wiki/Category:PNG_chess_pieces/Standard_transparent





Inspiration for the game:
I began playing chess in the 3rd grade. I have enjoyed playing since I was a kid, but for various reasons have not played much for the past decade or so. When I enrolled in a software development bootcamp through UNLV and our first big project was to make a game that runs in the browser, there was no doubt in my mind that I wanted to do chess. I also knew that it would be quite a challenge, as I have only learned how to write HTML/CSS/javascript in the past 2.5 months. Most of my classmates are doing much simpler things, like a choose your own adventure game or the like, but I knew that rising to the challenge of making a comparatively different game would be a great experience for me and really do a lot more to showcase my skills than a simpler game. Without even considering doing something easier, I made it happen. It is quite fun and there will also be a great many ways to improve this tool going forward. It can be something fun to work on for even years into the future!






Directions:
The way to play the game is to simply click on the piece you want to move, and then it will re-color the squares that are valid moves for that piece. 

To learn the basics of how to play chess, check out this link: https://www.thechesswebsite.com/learn-to-play-chess/

For more experienced players, check out the rest of The Chess Website dot com, there are a lot of helpful videos about different strategies and openings





Technologies used:
This game is coded entirely in HTML/CSS/Javascript. As of 4/1/23, I have not used any 3rd party libraries, the code is entirely my own using base classes and functions in the languages mentioned above.





Future plans:
1) There is a rarely used situation in chess referred to as "en passant", where a pawn can capture another pawn in a non-conventional pawn capture that is often not a good strategy to use, but is technically a legal move. I have not implemented the ability to do this yet, but to complete the game this is a definite need
2) Implement a computer player, where the player can play against a computer. Would probably need to start with the computer making random moves, as I am not quite sure where to get the necessary information for a computer to make intelligent moves, but that could also be implemented if I can figure it out
3) Implement user-directed style changes. Give the user the ability to change the icons for each piece and change their colors and also the board colors
4) There is a specific way that chess players know how to notate their games. Eventually this should be tracked while the player is playing and the user should be able to export it. Once I build the ability to load a saved game, eventually you should be able to load a game just with a list of moves in this notation, and not only the data generated from playing a game in this app. Then you could allow the ability to watch a famous game that you simply loaded in the notated moves from the famous game, complete with the ability pause and choose the speed at which you want to watch the moves go.
5) Make it look better in different size screens
6) Animate the piece movements
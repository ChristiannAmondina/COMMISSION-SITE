-- Table for Artists
CREATE TABLE Artists (
    ArtistID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    BirthDate DATE,
    Nationality VARCHAR(50)
);

-- Table for Artworks
CREATE TABLE Artworks (
    ArtworkID INT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    ArtistID INT,
    Description TEXT,
    CreationDate DATE,
    ImageURL VARCHAR(255),
    CONSTRAINT FK_Artists FOREIGN KEY (ArtistID) REFERENCES Artists(ArtistID)
);

-- Table for Users
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL
);

-- Table for Artwork Comments
CREATE TABLE Comments (
    CommentID INT PRIMARY KEY,
    ArtworkID INT,
    UserID INT,
    CommentText TEXT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_Artworks FOREIGN KEY (ArtworkID) REFERENCES Artworks(ArtworkID),
    CONSTRAINT FK_Users FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Additional Tables for Likes, Favorites, Sales, etc., can be added as needed
-- Inserting sample data for Artists
INSERT INTO Artists (ArtistID, Name, BirthDate, Nationality) VALUES
(1, 'Vincent van Gogh', '1853-03-30', 'Dutch'),
(2, 'Leonardo da Vinci', '1452-04-15', 'Italian');

-- Inserting sample data for Artworks
INSERT INTO Artworks (ArtworkID, Title, ArtistID, Description, CreationDate, ImageURL) VALUES
(1, 'Starry Night', 1, 'A masterpiece by Van Gogh...', '1889-06-30', 'starry_night.jpg'),
(2, 'Mona Lisa', 2, 'Leonardo\'s iconic portrait...', '1503-01-01', 'mona_lisa.jpg');

-- Inserting sample data for Users
INSERT INTO Users (UserID, Username, Email, PasswordHash) VALUES
(1, 'artlover123', 'artlover@example.com', 'hashed_password'),
(2, 'galleryowner', 'owner@example.com', 'hashed_password');

-- Inserting sample data for Comments
INSERT INTO Comments (CommentID, ArtworkID, UserID, CommentText) VALUES
(1, 1, 1, 'This painting is breathtaking!'),
(2, 2, 2, 'The Mona Lisa is truly a masterpiece.');

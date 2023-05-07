CREATE TABLE storyDialogue (
	id INT NOT NULL,
    dialogue VARCHAR(2048) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE storyOption (
    id INT NOT NULL,
    optionName VARCHAR(32) NOT NULL,
    storyFrom INT NOT NULL,
    storyTo INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(storyFrom) REFERENCES storyDialogue(id),
    FOREIGN KEY(storyTo) REFERENCES storyDialogue(id)
);

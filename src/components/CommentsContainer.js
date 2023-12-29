import React from "react";

const commentsData = [
  {
    name: "Aniket Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Aniket Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [
          {
            name: "Aniket Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
            replies: [
              {
                name: "Aniket Kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                replies: [
                  {
                    name: "Aniket Kumar",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                    replies: [
                      {
                        name: "Aniket Kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                        replies: [
                          {
                            name: "Aniket Kumar",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                            replies: [
                              {
                                name: "Aniket Kumar",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                                replies: [
                                  {
                                    name: "Aniket Kumar",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                                    replies: [
                                      {
                                        name: "Aniket Kumar",
                                        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                                        replies: [
                                          {
                                            name: "Aniket Kumar",
                                            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                                            replies: [
                                              {
                                                name: "Aniket Kumar",
                                                text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                                                replies: [
                                                  {
                                                    name: "Aniket Kumar",
                                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                                                    replies: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aniket Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Aniket Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [
          {
            name: "Aniket Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aniket Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Aniket Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [
          {
            name: "Aniket Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2">
      <img
        className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-img"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-6 border border-l-black ml-6">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

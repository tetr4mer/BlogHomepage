const postData_Hard = [
   {
      postID: 1, 
      postDate: "10/20/22" , 
      postTitle: "Check1 A Comprehendable Title For Testing", 
      postDesc: "First post and thus my first project!",
      postContent: 
         [{
            paragraph: "<p>This is the first paragraph</p>",
            paragraphCode: "for (let i = 0; i <=10; i++) { \n console.log(sup) \n  } if (x = 5) { \n console.log(ha) \n }"
         },
         {
            paragraph: "<p>This is the 2nd paragraph</p>",
            paragraphCode: "for (let i = 0; i <=10; i++)"
         },
         {
            paragraph: "<p> Note that there is no code following this object entry. This is the 3rd paragraph, lorem ipsum dolor This is a broadcast of the tetr4mer alert system, had this been.... </p>",
            
         },
         {
            paragraph: "<p>This is the 4th paragraph</p>",
           paragraphCode: "<code>here is some code </code>"
         }
      ]
   
   }
]


module.exports = postData_Hard;
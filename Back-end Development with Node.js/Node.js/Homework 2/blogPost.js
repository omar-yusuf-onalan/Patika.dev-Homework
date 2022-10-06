// A simple program that demonstrates async-await. There are three blogposts in the blogPosts array already.
// By utilizing the terminal, another blogpost may be added. This simple program lists all blogposts entries in the array 
// and adds in the third piece of data you entered into the terminal through process.argv. For example, if you enter
// "node blogPost 'Provident delectus ducimus necessitatibus.'", the fourth blogpost entry will become 
// "Provident delectus ducimus necessitatibus."

const argument = process.argv.slice(2)

blogPosts = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "Eligendi non quis exercitationem culpa nesciunt nihil aut",
    "Nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate."
];

function showPosts() {
    return new Promise((resolve, reject) => {
        console.log("Assembling blogpost data...")
        if (blogPosts) {
            resolve(blogPosts);
        } else {
            reject("Error! Could not assemble posts.");
        }

    })

}

function addPost(argument) {
    return new Promise((resolve, reject) => {
        console.log("Adding post...")
        if (argument) {
            resolve(blogPosts.push(argument));
        } else {
            reject("Error! Could not add post.")
        }

    })
};

async function processPosts() {
    try {
        const shownPosts = await showPosts();
        console.log(shownPosts);
        const addedPost = await addPost(argument);
        const shownPostsV2 = await showPosts();
        console.log(shownPostsV2);


    } catch (error) {
        console.log(error)
    }
};

processPosts(argument[0]);

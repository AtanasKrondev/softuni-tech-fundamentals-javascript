function solve(input) {
    let sortBy = input.pop();
    input.pop();

    let videosAndViews = {};
    let videosAndLikes = {};

    for (let video of input) {
        if (video.includes('-')) {
            let [name, views] = video.split('-');
            views = +views;

            if (!videosAndViews.hasOwnProperty(name)) {
                videosAndViews[name] = 0;
                videosAndLikes[name] = 0;
            }
            videosAndViews[name] += views;
        } else if (video.includes(':')) {
            let [likeDislike, name] = video.split(':');
            if (videosAndLikes.hasOwnProperty(name)) {
                if (likeDislike === 'like') {
                    videosAndLikes[name]++;
                } else if (likeDislike === 'dislike') {
                    videosAndLikes[name]--;
                }
            }
        }
    }

    if (sortBy === 'by views') {
        let sorted = Object.entries(videosAndViews)
            .sort((a, b) => b[1] - a[1])
            .forEach(e => console.log(`${e[0]} - ${e[1]} views - ${videosAndLikes[e[0]]} likes`));
    } else if (sortBy === 'by likes') {
        let sorted = Object.entries(videosAndLikes)
            .sort((a, b) => b[1] - a[1])
            .forEach(e => console.log(`${e[0]} - ${videosAndViews[e[0]]} views - ${e[1]} likes`));
    }
}

solve(['Eninem Venom-500',
    'like:Eninem Venom',
    'Funny Cats-700',
    'like:Funny Cats',
    'like:Funny Cats',
    'Eninem Venom-300',
    'stats time',
    'by likes']);
solve(['Eminem Ringer-300',
    'Messi Top Goals-500',
    'like:Eminem Ringer',
    'like:Eminem Ringer',
    'dislike:Eminem Ringer',
    'stats time',
    'by views']);
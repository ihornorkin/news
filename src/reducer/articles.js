import {articles as defaultArticles} from '../static/fixtures';

export default (articleState = defaultArticles, action) => {
    const {type} = action

    switch (type) {
        case 'DELETE_ARTICE': return articleState
    }

    return articleState;
}
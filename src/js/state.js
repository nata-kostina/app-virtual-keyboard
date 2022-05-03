import * as constants from './constants.js'

const state = {
	lang: localStorage.getItem('lang') || constants.ENG,

}

export default state;
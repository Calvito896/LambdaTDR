const axios = require('axios');

const API_URL = 'https://api.openai.com/v1/chat/completions';
const TOKEN = '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';

async function gpt(msg) {
    const data = {
        "model": "gpt-4",
        "messages": [{ "role": "user", "content": msg }]
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
    };

    try {
        const response = await axios.post(API_URL, data, { headers });
        let r= response.data.choices[0].message.content;
        //r= r.replace('\n',' ');
        return r;
    } catch (error) {
        console.log("error en response gpt: "+error);
        return "No me he podido conectar, inténtalo de nuevo."+ error;
    }
}

module.exports = gpt;
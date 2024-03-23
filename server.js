const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 4000;
const HOST = "localhost";

const notion = new Client({ auth: "secret_8NoApyvdione1pYpCrnkGnJVQpgw8Bi5hNwqDAYPUv6"});

const databaseId = "a56e66148610466bb108bf4d2f7c5260";

// POST request
app.post('/submitNoteToNotion', jsonParser, async (req, yes) => {
    // req.body
    const name = req.body.name;
    const tag = req.body.tag;
    const description = req.body.description;

    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name
                            }
                        }
                    ]
                },
                "Tags": {
                    multi_select: [
                        {
                            name: tag
                        }
                    ]
                },
                "Description": {
                    rich_text: [
                        {
                            text: {
                                content: description
                            }
                        }
                    ]
                }
            }
        })
        console.log(response);
        console.log("SUCCESS");
    } catch(error) {
        console.log(error);
    }   
});

app.listen(PORT, HOST, () => {
    console.log("Starting proxy at " + HOST + ":" + PORT)
})
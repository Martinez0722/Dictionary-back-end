import { createWriteStream } from 'fs';
import { pipeline }  from 'stream';
import { promisify }from 'util';
import fetch from 'node-fetch';

const download = async ({url, path}) => {
  const streamPipeline = promisify(pipeline);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`);
  }

  await streamPipeline(response.body, createWriteStream(path));
};

(async () => {
  try {
    await download({
      url: 'https://raw.githubusercontent.com/meetDeveloper/freeDictionaryAPI/master/meta/wordList/english.txt',
      path: 'english.txt',
    });
  } catch (err) {
    console.error(err);
  }
})();

export default download;

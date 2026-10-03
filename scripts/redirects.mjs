import { mkdir, writeFile } from 'node:fs/promises';

for (const id of ['tacit', 'tinyml', 'sign-language']) {
    const destination = `/#project-${id}`;
    const directory = new URL(`../build/projects/${id}/`, import.meta.url);
    await mkdir(directory, { recursive: true });
    await writeFile(new URL('index.html', directory), `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="https://abdussaboor.gaffari.com/${destination.slice(1)}"><title>Project — Abdus Saboor</title></head><body><p>This project is now on my homepage. <a href="${destination}">View the project</a>.</p></body></html>\n`);
}

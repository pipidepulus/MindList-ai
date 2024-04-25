# MindList AI

An open source map mental application built using Next.js 13, Open AI.



## About this project

MindList is a web application built with Next.js 13 and integrated with OpenAI. The goal of MindList is to help users generate ideas and think creatively by providing a starting point of a topic.

## Getting started

To get started, clone the repository and install the dependencies:

```bash
git clone git@github.com:pipidepulus/MindList-ai.git

cd MindList-ai/

yarn install
```

Following installation, create a `.env.local` file in the root of the project and add the following environment variables:

```bash
NEXT_PUBLIC_OPENAI_API_KEY="<your-openai-api-key>"
NEXT_PUBLIC_OPENAI_COMPLETION_MODEL="gpt-3.5-turbo"
```

You can get your OpenAI API key by signing up for an account [here](https://platform.openai.com/).

Once you have created your `.env.local` file, you can run the development server:

```bash
yarn dev
```



Licensed under the [MIT license](https://github.com/pipidepulus/MindList-ai/blob/main/LICENSE).

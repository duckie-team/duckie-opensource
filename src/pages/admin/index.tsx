import { db } from "@site/data/db";
import { projects } from "@site/data/project";
import { Flex } from "@site/src/components/flex";
import React from "react";

function Datas() {
  return (
    <Flex.Column gap="8px">
      <Flex.Column>
        <p>Projects</p>
        <pre>{JSON.stringify(db.projects, null, 4)}</pre>
      </Flex.Column>

      <Flex.Column>
        <p>articles</p>
        <pre>{JSON.stringify(db.articles, null, 4)}</pre>
      </Flex.Column>

      <Flex.Column>
        <p>articles</p>
        <pre>{JSON.stringify(db.articles, null, 4)}</pre>
      </Flex.Column>
    </Flex.Column>
  );
}

export default function Admin() {
  return (
    <>
      <Datas />
    </>
  );
}

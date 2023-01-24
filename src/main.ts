export type Article = {
  title: string;
  content: string;
  author: string;
  readCount: number;
  status: ArticleStatus;
};

export enum ArticleStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  DELETED = "deleted",
}

export class Test {
  add(a: number, b: number): number {
    return a + b;
  }

  getArticle(article: Article): Article {
    return article;
    // return {
    //   title: 'Hello',
    //   content: 'World',
    //   author: 'John',
    //   readCount: 0,
    //   status: ArticleStatus.DRAFT
    // }
  }
}

import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('udemdroit');

  if (req.method === 'GET') {
    try {
      const articles = await db
        .collection('articles')
        .find({})
        .sort({ date: -1, createdAt: -1 })
        .toArray();
      res.status(200).json(articles);
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  } else if (req.method === 'POST') {
    try {
      if (!req.headers.cookie?.includes('admin-auth=true')) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const articleData = {
        ...req.body,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      if (!articleData.id) {
        const lastArticle = await db
          .collection('articles')
          .find({})
          .sort({ id: -1 })
          .limit(1)
          .toArray();
        articleData.id = lastArticle.length > 0 ? lastArticle[0].id + 1 : 1;
      }
      const result = await db.collection('articles').insertOne(articleData);
      const newArticle = { ...articleData, _id: result.insertedId };
      res.status(201).json(newArticle);
    } catch (error) {
      console.error('Failed to create article:', error);
      res.status(500).json({ error: 'Failed to create article' });
    }
  } else if (req.method === 'PUT') {
    try {
      if (!req.headers.cookie?.includes('admin-auth=true')) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { id } = req.query;
      const updates = {
        ...req.body,
        updatedAt: new Date(),
      };
      const result = await db
        .collection('articles')
        .updateOne({ id: parseInt(id) }, { $set: updates });
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.status(200).json({ message: 'Article updated successfully' });
    } catch (error) {
      console.error('Failed to update article:', error);
      res.status(500).json({ error: 'Failed to update article' });
    }
  } else if (req.method === 'DELETE') {
    try {
      if (!req.headers.cookie?.includes('admin-auth=true')) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { id } = req.query;
      const result = await db
        .collection('articles')
        .deleteOne({ id: parseInt(id) });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
      console.error('Failed to delete article:', error);
      res.status(500).json({ error: 'Failed to delete article' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

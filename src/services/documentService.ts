import api from '@/services/http';

export const DocumentService = {
    async getByQuery(query: string) {
      const res = await api.get('/user/docs', {
        params: { search: query },
      });
      return res.data;
    },
  };
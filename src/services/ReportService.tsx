import axios, { AxiosResponse } from 'axios';
import baseUrl from '../utils/UrlUtils';

class ReportService {
  list(): Promise<AxiosResponse> {
    return axios.get(`${baseUrl}/report/`);
  }

  get(id: string): Promise<AxiosResponse> {
    return axios.get(`${baseUrl}/report/${id}`);
  }

  addReport(report: any) {
    return axios.post(`${baseUrl}/report`, report);
  }
}

export default new ReportService();

import { Box, Center, CircularProgress, CircularProgressLabel, Container, Text } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import CreateReportPage from './pages/CreateReportPage';
const ReportAdminListPage = lazy(() => import('./pages/ReportAdminListPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ReportListPage = lazy(() => import('./pages/ReportListPage'));
const ReportPreviewPage = lazy(() => import('./pages/ReportPreviewPage'));

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Container maxW="10xl">
          <Suspense
            fallback={
              <Center>
                <CircularProgress isIndeterminate color="green.300">
                  <CircularProgressLabel>Loading</CircularProgressLabel>
                </CircularProgress>
              </Center>
            }
          >
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="report">
                  <Route index element={<ReportListPage />} />
                  <Route path=":id" element={<ReportPreviewPage />} />
                </Route>
                <Route path="admin">
                  <Route index element={<ReportAdminListPage />} />
                  <Route path="create_report" element={<CreateReportPage />} />
                </Route>
                <Route
                  path="*"
                  element={
                    <Box>
                      <Text>There's nothing here...</Text>
                    </Box>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;

//
// admin
//   - list reports
//     - make reports public
//   - create report
//   - edit report
//
// user
//   - list reports
//     - export report

// metadata
//
//   - list of db objects
//   - list of columns

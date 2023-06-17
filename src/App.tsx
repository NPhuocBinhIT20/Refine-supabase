import {
  GitHubBanner,
  Refine,
  Authenticated,
} from "@refinedev/core";
import {
  notificationProvider,
  ThemedLayoutV2,
  ErrorComponent,
  AuthPage,
  RefineThemes,
} from "@refinedev/antd";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import authProvider from "authProvider";
import routerProvider, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { ConfigProvider } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { TaskList, TaskShow, TaskCreate, TaskEdit } from "./pages/task";
import { UserList, UserEdit, UserShow } from "./pages/user";
import { supabaseClient } from "utility";


const App: React.FC = () => {
  return (
      <BrowserRouter>
          <GitHubBanner />
          <ConfigProvider theme={RefineThemes.Blue}>
              <Refine
                  dataProvider={dataProvider(supabaseClient)}
                  liveProvider={liveProvider(supabaseClient)}
                  routerProvider={routerProvider}
                  authProvider={authProvider}
                  resources={[
                      {
                          name: "posts",
                          list: "/posts",
                          create: "/posts/create",
                          edit: "/posts/edit/:id",
                          show: "/posts/show/:id",
                          meta: {
                              canDelete: true,
                          },
                      },
                    {
                        name: "users",
                        list: "/users",
                        edit: "/users/edit/:id",
                        show: "/users/show/:id"
                    },
                    {
                        name: "tasks",
                        list: "/tasks",
                        show: "/tasks/show/:id",
                        create: "/tasks/create",
                        edit: "/tasks/edit/:id",
                    },
                  ]}
                  notificationProvider={notificationProvider}
                  options={{
                      liveMode: "off",
                      syncWithLocation: true,
                      warnWhenUnsavedChanges: true,
                  }}
              >
                  <Routes>
                      <Route
                          element={
                              <Authenticated
                                  fallback={<CatchAllNavigate to="/login" />}
                              >
                                  <ThemedLayoutV2>
                                      <Outlet />
                                  </ThemedLayoutV2>
                              </Authenticated>
                          }
                      >
                          <Route
                              index
                              element={
                                  <NavigateToResource resource="posts" />
                              }
                          />

                          <Route path="/posts">
                              <Route index element={<PostList />} />
                              <Route path="create" element={<PostCreate />} />
                              <Route path="edit/:id" element={<PostEdit />} />
                              <Route path="show/:id" element={<PostShow />} />
                          </Route>
                          <Route path="/users">
                              <Route index element={<UserList />} />
                              <Route path="edit/:id" element={<UserEdit />} />
                              <Route path="show/:id" element={<UserShow />} />
                          </Route>

                            <Route path="tasks">
                                <Route index element={<TaskList />} />
                                <Route path="edit/:id" element={<TaskEdit />} />
                                <Route path="create" element={<TaskCreate />} />
                                <Route path="show/:id" element={<TaskShow />} />
                            </Route>
                      </Route>

                      <Route
                          element={
                              <Authenticated fallback={<Outlet />}>
                                  <NavigateToResource resource="posts" />
                              </Authenticated>
                          }
                      >
                          <Route
                              path="/login"
                              element={
                                  <AuthPage
                                      type="login"
                                      providers={[
                                          {
                                              name: "google",
                                              label: "Sign in with Google",
                                              icon: (
                                                  <GoogleOutlined
                                                      style={{
                                                          fontSize: 18,
                                                          lineHeight: 0,
                                                      }}
                                                  />
                                              ),
                                          },
                                      ]}
                                      formProps={{
                                          initialValues: {
                                              email: "info@refine.dev",
                                              password: "refine-supabase",
                                          },
                                      }}
                                  />
                              }
                          />
                          <Route
                              path="/register"
                              element={<AuthPage type="register" />}
                          />
                          <Route
                              path="/forgot-password"
                              element={<AuthPage type="forgotPassword" />}
                          />
                          <Route
                              path="/update-password"
                              element={<AuthPage type="updatePassword" />}
                          />
                      </Route>
                      
                      <Route
                            element={
                                <Authenticated fallback={<Outlet />}>
                                    <NavigateToResource resource="users" />
                                </Authenticated>
                            }
                        >
                        </Route>
                      <Route
                          element={
                              <Authenticated>
                                  <ThemedLayoutV2>
                                      <Outlet />
                                  </ThemedLayoutV2>
                              </Authenticated>
                          }
                      >
                          <Route path="*" element={<ErrorComponent />} />
                      </Route>
                  </Routes>
                  <UnsavedChangesNotifier />
                  <DocumentTitleHandler />
              </Refine>
          </ConfigProvider>
      </BrowserRouter>
  );
};

export default App;
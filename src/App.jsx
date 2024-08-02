import React, { useState } from 'react';
import { Layout, Input, Button, List, Typography, Space } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Layout className="layout">
      <Header>
        <Title style={{ color: 'white' }} level={2}>Todo App</Title>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            placeholder="Enter a task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={addTask}
          />
          <Button type="primary" onClick={addTask}>
            Add Task
          </Button>
          <List
            size="large"
            bordered
            dataSource={tasks}
            renderItem={(task, index) => (
              <List.Item
                actions={[<Button onClick={() => removeTask(index)}>Remove</Button>]}
              >
                {task}
              </List.Item>
            )}
          />
        </Space>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Todo App ©2024</Footer>
    </Layout>
  );
};

export default App;


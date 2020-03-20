import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {setReposData} from '../store/actions/repos';
import {useSelector, useDispatch} from 'react-redux';

import api from '../services/api';

import Repo from '../components/Repo';
import SearchBox from '../components/Search';

import {Title} from '../styles/Styles';

const Home = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos);
  const setRepos = (data: Array<any>) => dispatch(setReposData(data));

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    const repos = await api.get('/repos');
    setRepos(repos.data);
    console.log(repos.data);
  };

  return (
    <View>
      <Title>Recent</Title>
      <SearchBox />
      <ScrollView>
        {console.log(repos)}
        {repos && Array.isArray(repos) && repos.length >= 1 && repos[0].owner
          ? repos.map(repo => (
              <View key={repo.id}>
                <Repo
                  name={repo.name}
                  owner={repo.owner.login}
                  avatar={repo.owner.avatar_url}
                />
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default Home;

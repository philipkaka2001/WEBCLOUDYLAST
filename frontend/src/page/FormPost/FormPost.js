import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import memories from '../../assets/memories.png';

const FormPost = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg" alignItems="center">
     
            <Grid item xs={12} sm={6}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
    </Container>
  );
};

export default FormPost;

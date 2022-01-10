import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View, Button } from "../components/Themed";

import { getCurrentUser } from "../api/users";

import Navigation from "../views/Navigation";
import Notice from "../views/Notice";

const Home = (props) => {
  useEffect(() => {
    props.getCurrentUser();
  }, []);

  return (
    <View style={styles.container}>
      <Navigation {...props} />
      <ScrollView style={styles.home}>
        <Notice />
      </ScrollView>
      <Button>
          <Text style={styles.buttonText}>Post</Text>
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },
  home: {
    flex: 1,
    padding: 24,
  },
  text: {
    marginBottom: 48,
  },
  buttonText: {
    color: "white",
  },
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCurrentUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

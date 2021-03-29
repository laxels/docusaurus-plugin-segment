import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location }) {
      window.analytics.track('Page View', { pathname: location.pathname, title: document.title, host: document.host }); 
    },
  };
})();
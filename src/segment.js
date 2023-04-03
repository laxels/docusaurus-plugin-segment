import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate() {
      if (!window.analytics) return;
      if (!isAllowedUserAgent(window._docusaurusPluginSegment.excludeUserAgents)) {
        return;
      }
      setTimeout(() => window.analytics.page(), 0);
    },
  };
})();

function isAllowedUserAgent(excludeUserAgents) {
  if (!Array.isArray(excludeUserAgents)) {
    return true;
  }

  for (const ua of excludeUserAgents) {
    if (typeof ua === `string` && navigator.userAgent.includes(ua)) {
      return false;
    }
  }
  return true;
}
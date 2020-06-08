export function minutesSuffix(n) {
  if (n <= 100) return formatLess100(n);
  if (n > 100) return formatLess100(n % 100);
}

function formatLess20(n) {
  if (n == 0) return "";
  if (n == 1) return "а";
  if (2 <= n && n <= 4) return "ы";
  if (5 <= n && n <= 20) return "";
}

function formatLess100(n) {
  if (n <= 20) return formatLess20(n);
  if (21 <= n <= 100) return formatLess20(n % 10);
}
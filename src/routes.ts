// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createUser(request, response) {
  const { name } = request.body;

  return response.status(201).json({ name });
}

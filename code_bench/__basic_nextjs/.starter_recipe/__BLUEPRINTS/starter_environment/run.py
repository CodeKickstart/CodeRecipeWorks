from code_transformer.src._start.generator import fn_start

error, _ = fn_start(__file__)
if error is not None:
    print(error)
    exit(1)




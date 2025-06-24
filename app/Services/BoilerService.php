<?php

namespace App\Services;


use App\Models\Boiler;
use App\Services\BaseService;

class BoilerService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Boiler::class;
    }

    public function storeOrUpdate($data, $id = null)
    {
        try {
            // Call patent method
            return parent::storeOrUpdate($data, $id);
        } catch (\Exception $e) {
            $this->logFlashThrow($e);
        }
    }
}

